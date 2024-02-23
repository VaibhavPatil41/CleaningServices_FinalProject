using System;
using System.Collections.Generic;

namespace CleaningServices.Models
{
    public partial class User
    {
        public User()
        {
            Bookings = new HashSet<Booking>();
            Feebacks = new HashSet<Feeback>();
        }

        public int UserId { get; set; }
        public string? Address { get; set; }
        public string? Contactno { get; set; }
        public string? Dob { get; set; }
        public string? Email { get; set; }
        public string? Name { get; set; }
        public int? LoginId { get; set; }

        public virtual Login? Login { get; set; }
        public virtual ICollection<Booking> Bookings { get; set; }
        public virtual ICollection<Feeback> Feebacks { get; set; }
    }
}
