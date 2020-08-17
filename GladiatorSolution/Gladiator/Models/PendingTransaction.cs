using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace Gladiator.Models
{
    [DataContract]
    public class PendingTransaction
    {
        [DataMember]
        public string Bemail { get; set; }
        [DataMember]
        public int CropId { get; set; }
    }
}