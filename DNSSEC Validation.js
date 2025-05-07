function verifyDnssec(response) {
  if (!response.ad) return 'insecure';
  return response.rcode === 'NOERROR' ? 'secure' : 'bogus';
}