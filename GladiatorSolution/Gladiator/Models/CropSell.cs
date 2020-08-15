//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Gladiator.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class CropSell
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public CropSell()
        {
            this.LiveBids = new HashSet<LiveBid>();
        }
    
        public string CropName { get; set; }
        public string CropID { get; set; }
        public string Femail { get; set; }
        public string Fertilizer { get; set; }
        public decimal Quantity { get; set; }
        public string PhVal { get; set; }
        public System.DateTime ExpiryDate { get; set; }
        public System.DateTime BaseFarmerPrice { get; set; }
        public bool AdminApprove { get; set; }
    
        public virtual Crop Crop { get; set; }
        public virtual Farmer Farmer { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<LiveBid> LiveBids { get; set; }
    }
}
