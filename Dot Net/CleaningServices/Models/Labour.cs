using System;
using System.Collections.Generic;

namespace CleaningServices.Models
{
    public partial class Labour
    {
        public int LabourId { get; set; }
        public string? Contactno { get; set; }
        public string? Name { get; set; }
        public string? PanNo { get; set; }
        public int? Status { get; set; }
        public int? SpId { get; set; }

        public virtual Serviceprovider? Sp { get; set; }
    }
}
