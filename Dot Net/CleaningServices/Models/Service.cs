using System;
using System.Collections.Generic;

namespace CleaningServices.Models
{
    public partial class Service
    {
        public Service()
        {
            Bookings = new HashSet<Booking>();
            Feebacks = new HashSet<Feeback>();
        }

        public int ServiceId { get; set; }
        public string? Description { get; set; }
        public int? Price { get; set; }
        public string? Sname { get; set; }
        public int? Status { get; set; }
        public int? Catid { get; set; }
        public int? SpId { get; set; }

        public virtual Category? Cat { get; set; }
        public virtual Serviceprovider? Sp { get; set; }
        public virtual ICollection<Booking> Bookings { get; set; }
        public virtual ICollection<Feeback> Feebacks { get; set; }
    }
}
