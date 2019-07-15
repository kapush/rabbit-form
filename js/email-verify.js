async function verifyEmail(email){
  try {
    const response = await fetch(prepareUrl(email));
    const data = await response.json();
    if(checkIfVerified(data)){
      youAreRegistered();
    } else {
      showError();
    }
  } catch (error) {
    console.log(`Rejected: ${error}`);
  }
}

function prepareUrl(email){
  return `https://apilayer.net/api/check?access_key=326bfc204e238fd5cdab96e8f86aa37d&email=${email}`;
}

function checkIfVerified(response){
    return response.smtp_check;
}