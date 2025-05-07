interface DnsResult {
  type: string;
  name: string;
  value: string;
  ttl: number;
  class: string;
  priority?: number;
  dnssec?: {
    status: 'secure' | 'insecure' | 'bogus';
    rrsig?: string;
  };
}