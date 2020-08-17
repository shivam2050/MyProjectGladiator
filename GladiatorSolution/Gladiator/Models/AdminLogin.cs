using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace Gladiator.Models
{
    [DataContract]
    public class AdminLogin
    {
        [DataMember]
        public string Id { get; set; }
        [DataMember]
        public string Password { get; set; }
    }
}