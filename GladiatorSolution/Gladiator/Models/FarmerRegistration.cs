using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Gladiator.Models
{
    public class FarmerRegistration
    {
        public string name { get; set; }
        public string femail { get; set; }
        public string contactno { get; set; }
        public string address { get; set; }

        public string city { get; set; }
        public string state { get; set; }

        public string pin { get; set; }

        public string accno { get; set; }
        public string ifsc { get; set; }
        public string password { get; set; }
    }
}