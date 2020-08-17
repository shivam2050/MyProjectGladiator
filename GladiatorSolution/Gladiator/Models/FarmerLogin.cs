using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Emit;
using System.Runtime.Serialization;
using System.Web;

namespace Gladiator.Models
{
    [DataContract]
    public class FarmerLogin
    {
        [DataMember]
        public string Femail { get; set; }
        [DataMember]
        public string Password { get; set; }

        
    }
}