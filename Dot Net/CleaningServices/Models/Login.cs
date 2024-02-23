using System;
using System.Collections.Generic;

namespace CleaningServices.Models
{
    public partial class Login
    {
        public int Loginid { get; set; }
        public string? Password { get; set; }
        public string? Username { get; set; }
        public int? RoleId { get; set; }

        public virtual Role? Role { get; set; }
        public virtual Serviceprovider? Serviceprovider { get; set; }
        public virtual User? User { get; set; }
    }
}
