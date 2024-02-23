using System;
using System.Collections.Generic;

namespace CleaningServices.Models
{
    public partial class Feeback
    {
        public int Fid { get; set; }
        public string? Comment { get; set; }
        public int? Rating { get; set; }
        public int? ServiceId { get; set; }
        public int? UserId { get; set; }

        public virtual Service? Service { get; set; }
        public virtual User? User { get; set; }
    }
}
