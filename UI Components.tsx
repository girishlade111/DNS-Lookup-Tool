// Main lookup form
function DnsForm() {
  const [query, setQuery] = useState('');
  const [recordType, setRecordType] = useState('A');
  const [resolver, setResolver] = useState('1.1.1.1');
  const [dnssec, setDnssec] = useState(false);

  const isValidInput = useMemo(() => 
    validateDomain(query) || validateIP(query), [query]);

  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter domain or IP"
        pattern="^(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$|^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$|^([0-9a-fA-F]{0,4}:){2,7}[0-9a-fA-F]{0,4}$"
      />
      
      <select value={recordType} onChange={(e) => setRecordType(e.target.value)}>
        {RECORD_TYPES.map(type => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select>

      <DnssecToggle enabled={dnssec} onChange={setDnssec} />
      <ResolverSelector value={resolver} onChange={setResolver} />
    </form>
  );
}