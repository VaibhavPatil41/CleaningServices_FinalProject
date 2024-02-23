using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace CleaningServices.Models
{
    public partial class cleaningdbContext : DbContext
    {
        public cleaningdbContext()
        {
        }

        public cleaningdbContext(DbContextOptions<cleaningdbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Booking> Bookings { get; set; } = null!;
        public virtual DbSet<Category> Categories { get; set; } = null!;
        public virtual DbSet<Feeback> Feebacks { get; set; } = null!;
        public virtual DbSet<Labour> Labours { get; set; } = null!;
        public virtual DbSet<Login> Logins { get; set; } = null!;
        public virtual DbSet<Role> Roles { get; set; } = null!;
        public virtual DbSet<Service> Services { get; set; } = null!;
        public virtual DbSet<Serviceprovider> Serviceproviders { get; set; } = null!;
        public virtual DbSet<User> Users { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseMySql("server=localhost;port=3306;user=root;password=root;database=cleaningdb", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.31-mysql"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.UseCollation("utf8mb4_0900_ai_ci")
                .HasCharSet("utf8mb4");

            modelBuilder.Entity<Booking>(entity =>
            {
                entity.ToTable("booking");

                entity.HasIndex(e => e.SpId, "FK824nidyf6m9n26uu8wfwvshtg");

                entity.HasIndex(e => e.ServiceId, "FKd6bok0hme4dnt62ldm25tgl7");

                entity.HasIndex(e => e.UserId, "FKkgseyy7t56x7lkjgu3wah5s3t");

                entity.Property(e => e.BookingId).HasColumnName("booking_id");

                entity.Property(e => e.Address)
                    .HasMaxLength(255)
                    .HasColumnName("address");

                entity.Property(e => e.Date)
                    .HasMaxLength(255)
                    .HasColumnName("date");

                entity.Property(e => e.LabourId).HasColumnName("labour_id");

                entity.Property(e => e.PaymentStatus).HasColumnName("payment_status");

                entity.Property(e => e.ServiceId).HasColumnName("service_id");

                entity.Property(e => e.SpId).HasColumnName("sp_id");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.HasOne(d => d.Service)
                    .WithMany(p => p.Bookings)
                    .HasForeignKey(d => d.ServiceId)
                    .HasConstraintName("FKd6bok0hme4dnt62ldm25tgl7");

                entity.HasOne(d => d.Sp)
                    .WithMany(p => p.Bookings)
                    .HasForeignKey(d => d.SpId)
                    .HasConstraintName("FK824nidyf6m9n26uu8wfwvshtg");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Bookings)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FKkgseyy7t56x7lkjgu3wah5s3t");
            });

            modelBuilder.Entity<Category>(entity =>
            {
                entity.HasKey(e => e.Catid)
                    .HasName("PRIMARY");

                entity.ToTable("categories");

                entity.Property(e => e.Catid).HasColumnName("catid");

                entity.Property(e => e.Catname)
                    .HasMaxLength(255)
                    .HasColumnName("catname");
            });

            modelBuilder.Entity<Feeback>(entity =>
            {
                entity.HasKey(e => e.Fid)
                    .HasName("PRIMARY");

                entity.ToTable("feeback");

                entity.HasIndex(e => e.UserId, "FK8na9f6t34021b5wvr6idgdsbk");

                entity.HasIndex(e => e.ServiceId, "FKgr7lfaf3ydyolckt4r4k4emkg");

                entity.Property(e => e.Fid).HasColumnName("fid");

                entity.Property(e => e.Comment)
                    .HasMaxLength(255)
                    .HasColumnName("comment");

                entity.Property(e => e.Rating).HasColumnName("rating");

                entity.Property(e => e.ServiceId).HasColumnName("service_id");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.HasOne(d => d.Service)
                    .WithMany(p => p.Feebacks)
                    .HasForeignKey(d => d.ServiceId)
                    .HasConstraintName("FKgr7lfaf3ydyolckt4r4k4emkg");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Feebacks)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK8na9f6t34021b5wvr6idgdsbk");
            });

            modelBuilder.Entity<Labour>(entity =>
            {
                entity.ToTable("labour");

                entity.HasIndex(e => e.SpId, "FK5ojggoyer75s72pmhq3iae7hc");

                entity.Property(e => e.LabourId).HasColumnName("labour_id");

                entity.Property(e => e.Contactno)
                    .HasMaxLength(255)
                    .HasColumnName("contactno");

                entity.Property(e => e.Name)
                    .HasMaxLength(255)
                    .HasColumnName("name");

                entity.Property(e => e.PanNo)
                    .HasMaxLength(255)
                    .HasColumnName("pan_no");

                entity.Property(e => e.SpId).HasColumnName("sp_id");

                entity.Property(e => e.Status).HasColumnName("status");

                entity.HasOne(d => d.Sp)
                    .WithMany(p => p.Labours)
                    .HasForeignKey(d => d.SpId)
                    .HasConstraintName("FK5ojggoyer75s72pmhq3iae7hc");
            });

            modelBuilder.Entity<Login>(entity =>
            {
                entity.ToTable("login");

                entity.HasIndex(e => e.RoleId, "FKb5k3dk3163hw6o0tti30xt8lx");

                entity.Property(e => e.Loginid).HasColumnName("loginid");

                entity.Property(e => e.Password)
                    .HasMaxLength(255)
                    .HasColumnName("password");

                entity.Property(e => e.RoleId).HasColumnName("role_id");

                entity.Property(e => e.Username)
                    .HasMaxLength(255)
                    .HasColumnName("username");

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.Logins)
                    .HasForeignKey(d => d.RoleId)
                    .HasConstraintName("FKb5k3dk3163hw6o0tti30xt8lx");
            });

            modelBuilder.Entity<Role>(entity =>
            {
                entity.ToTable("role");

                entity.Property(e => e.RoleId)
                    .ValueGeneratedNever()
                    .HasColumnName("role_id");

                entity.Property(e => e.RoleName)
                    .HasMaxLength(255)
                    .HasColumnName("role_name");
            });

            modelBuilder.Entity<Service>(entity =>
            {
                entity.ToTable("services");

                entity.HasIndex(e => e.SpId, "FKr6odehwe9948rm0jbx83xhfno");

                entity.HasIndex(e => e.Catid, "FKrep0i5exxapdp34js95limhef");

                entity.Property(e => e.ServiceId).HasColumnName("service_id");

                entity.Property(e => e.Catid).HasColumnName("catid");

                entity.Property(e => e.Description)
                    .HasMaxLength(255)
                    .HasColumnName("description");

                entity.Property(e => e.Price).HasColumnName("price");

                entity.Property(e => e.Sname)
                    .HasMaxLength(255)
                    .HasColumnName("sname");

                entity.Property(e => e.SpId).HasColumnName("sp_id");

                entity.Property(e => e.Status).HasColumnName("status");

                entity.HasOne(d => d.Cat)
                    .WithMany(p => p.Services)
                    .HasForeignKey(d => d.Catid)
                    .HasConstraintName("FKrep0i5exxapdp34js95limhef");

                entity.HasOne(d => d.Sp)
                    .WithMany(p => p.Services)
                    .HasForeignKey(d => d.SpId)
                    .HasConstraintName("FKr6odehwe9948rm0jbx83xhfno");
            });

            modelBuilder.Entity<Serviceprovider>(entity =>
            {
                entity.HasKey(e => e.SpId)
                    .HasName("PRIMARY");

                entity.ToTable("serviceprovider");

                entity.HasIndex(e => e.LoginId, "UK_4iwr0jewh9kxbc7hqoe1boajs")
                    .IsUnique();

                entity.Property(e => e.SpId).HasColumnName("sp_id");

                entity.Property(e => e.Address)
                    .HasMaxLength(255)
                    .HasColumnName("address");

                entity.Property(e => e.Contactno)
                    .HasMaxLength(255)
                    .HasColumnName("contactno");

                entity.Property(e => e.Email)
                    .HasMaxLength(255)
                    .HasColumnName("email");

                entity.Property(e => e.LicenseId)
                    .HasMaxLength(255)
                    .HasColumnName("license_id");

                entity.Property(e => e.LoginId).HasColumnName("login_id");

                entity.Property(e => e.Name)
                    .HasMaxLength(255)
                    .HasColumnName("name");

                entity.Property(e => e.Status).HasColumnName("status");

                entity.HasOne(d => d.Login)
                    .WithOne(p => p.Serviceprovider)
                    .HasForeignKey<Serviceprovider>(d => d.LoginId)
                    .HasConstraintName("FKr0bd1g7pwxkos09bnnast9f2y");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("user");

                entity.HasIndex(e => e.LoginId, "UK_6ntlp6n5ltjg6hhxl66jj5u0l")
                    .IsUnique();

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.Property(e => e.Address)
                    .HasMaxLength(255)
                    .HasColumnName("address");

                entity.Property(e => e.Contactno)
                    .HasMaxLength(255)
                    .HasColumnName("contactno");

                entity.Property(e => e.Dob)
                    .HasMaxLength(255)
                    .HasColumnName("dob");

                entity.Property(e => e.Email)
                    .HasMaxLength(255)
                    .HasColumnName("email");

                entity.Property(e => e.LoginId).HasColumnName("login_id");

                entity.Property(e => e.Name)
                    .HasMaxLength(255)
                    .HasColumnName("name");

                entity.HasOne(d => d.Login)
                    .WithOne(p => p.User)
                    .HasForeignKey<User>(d => d.LoginId)
                    .HasConstraintName("FKr0shamf09rtlymwc9elplf8pf");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
