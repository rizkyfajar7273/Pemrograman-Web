const buku = {
    judul: "Harry Potter and The Philosopher's Stone",
    pengarang: "J. K. Rowling",
    tahun: 1997
  };
  
  for (let properti in buku) {
    console.log(`${properti}: ${buku[properti]}`);
  }