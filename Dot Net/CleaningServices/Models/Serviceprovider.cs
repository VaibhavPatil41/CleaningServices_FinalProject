using System;
using System.Collections.Generic;

namespace CleaningServices.Models
{
    public partial class Serviceprovider
    {
        public Serviceprovider()
        {
            Bookings = new HashSet<Booking>();
            Labours = new HashSet<Labour>();
            Services = new HashSet<Service>();
        }

        public int SpId { get; set; }
        public string? Address { get; set; }
        public string? Contactno { get; set; }
        public string? Email { get; set; }
        public string? LicenseId { get; set; }
        public string? Name { get; set; }
        public int? Status { get; set; }
        public int? LoginId { get; set; }

        public virtual Login? Login { get; set; }
        public virtual ICollection<Booking> Bookings { get; set; }
        public virtual ICollection<Labour> Labours { get; set; }
        public virtual ICollection<Service> Services { get; set; }
    }
}
