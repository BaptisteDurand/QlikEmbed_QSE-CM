document.getElementById('loginButton').addEventListener('click', async () => {
    // Récupération de la configuration serveur
    const config = await fetch('/login').then(res => res.json());
    const appUrl = config.appUrl;
    const token = config.token;
  
    // Fonction de vérification du login
    async function isLoggedIn() {
      const response = await fetch(`${appUrl}/jwt/qrs/about?xrfkey=0000000000000000`, {
        method: 'GET',
        mode: 'cors',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'X-Qlik-xrfkey': '0000000000000000',
          'Authorization': `Bearer ${token}`,
        },
      });
      return response.status === 200;
    }
  
    // Vérifier si l'utilisateur est connecté
    const loggedIn = await isLoggedIn();
    if (loggedIn) {
      alert('You are logged in!');
      window.location.href = '/dashboard.html';
    } else {
      alert('You are not logged in');
    }
  });