const number = 100;
const text = 'a';

try {
  console.log(number / text);
  console.log(a); // Ini akan menyebabkan error karena 'a' tidak didefinisikan
} catch (err) {
  console.log('An error caught');
  console.log(`Error message: ${err.name}: ${err.message}`);
} finally {
  console.log('Finally will execute every time');
}