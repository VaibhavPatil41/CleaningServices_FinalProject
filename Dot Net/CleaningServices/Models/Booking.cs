using System;
using System.Collections.Generic;

namespace CleaningServices.Models
{
    public partial class Booking
    {
        public int BookingId { get; set; }
        public string? Address { get; set; }
        public string? Date { get; set; }
        public int? LabourId { get; set; }
        public int? PaymentStatus { get; set; }
        public int? ServiceId { get; set; }
        public int? SpId { get; set; }
        public int? UserId { get; set; }

        public virtual Service? Service { get; set; }
        public virtual Serviceprovider? Sp { get; set; }
        public virtual User? User { get; set; }
    }
}
