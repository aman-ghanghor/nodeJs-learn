# DNS - Domain Name System

The dns(domain name system) module enables name resolution. For example, use it to look up IP addresses of host names.

const dns = require("dns") ;
import dns from "dns" ;



1) lookup() - 

    It resolves a host name (e.g. 'geekyshows.com') into the first found A (IPv4) or AAAA (IPv6) record. lookup() does not neccessarily have anything to do with the DNS protocol. The implementation uses an operating system facility that can associate names with addresses, and vice versa.


2) resolve() -

    It uses the DNS protocol to resolve a host name (e.g. 'geekyshows.com') into an array of the resource records. The callback function has arguments (err, records). When successful, records will be an array of resource records.
    Syntax: resolve(hostname, rrtype, callback) ;

    
[note-]


[rrtype]                              [records_contains]

'A'                -                  IPv4 addresses (default)
'AAAA'             -                  IPv6 addresses 
'ANY'              -                  any records
'CAA'              -                  CA authorization records
'CNAME'            -                  Canonical Name Records
'MX'               -                  Mail Exchange Records
'NAPTR'            -                  Name Authority Pointer Records
:
:
:
