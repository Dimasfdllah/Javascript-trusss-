function pasanganTerbesar(num) {
  const n = String(num).split("");
  let result = 0;
  for (let i = 0; i < n.length - 1; i++) {
    const hasil = parseInt(n[i] + n[i + 1]);

    if (hasil > result) {
      result = hasil;
    }
  }
  return result;
}

console.log(pasanganTerbesar(641573));
