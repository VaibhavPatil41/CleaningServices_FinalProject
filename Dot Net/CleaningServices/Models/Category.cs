using System;
using System.Collections.Generic;

namespace CleaningServices.Models
{
    public partial class Category
    {
        public Category()
        {
            Services = new HashSet<Service>();
        }

        public int Catid { get; set; }
        public string? Catname { get; set; }

        public virtual ICollection<Service> Services { get; set; }
    }
}
