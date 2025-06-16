function generatePassword() {
  const length = parseInt(document.getElementById('length').value);
  const output = document.getElementById('password-output');

  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*'; /*()-_=+[]{}|;:,.<>?*/
  let password = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  output.textContent = password;
}
