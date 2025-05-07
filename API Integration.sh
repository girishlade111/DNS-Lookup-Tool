# Developer API Endpoint
POST /api/v1/lookup
{
  "query": "example.com",
  "type": "A",
  "dnssec": true
}

# Response
{
  "status": "success",
  "data": [{
    "type": "A",
    "value": "93.184.216.34",
    "ttl": 300,
    "dnssec": "secure"
  }]
}