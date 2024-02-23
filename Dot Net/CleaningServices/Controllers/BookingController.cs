using CleaningServices.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace CleaningServices.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    [EnableCors]
    public class BookingController : Controller
    {
        [HttpGet]
        public List<Booking> GetBookings()
        {
            List<Booking> bookings = new List<Booking>();
            using (var db = new cleaningdbContext())
            {
                bookings = db.Bookings.ToList();
            }
            return bookings;
        }
    }
}
