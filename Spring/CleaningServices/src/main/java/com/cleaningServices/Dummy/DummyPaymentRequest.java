package com.cleaningServices.Dummy;

public class DummyPaymentRequest {
	
	    private int booking_id;
	    private int labour_id;
	    
	    
	    
	    
		public DummyPaymentRequest() {
			super();
			// TODO Auto-generated constructor stub
		}
		public DummyPaymentRequest(int booking_id, int labour_id) {
			super();
			this.booking_id = booking_id;
			this.labour_id = labour_id;
		}
		public int getBooking_id() {
			return booking_id;
		}
		public void setBooking_id(int booking_id) {
			this.booking_id = booking_id;
		}
		public int getLabour_id() {
			return labour_id;
		}
		public void setLabour_id(int labour_id) {
			this.labour_id = labour_id;
		}

	


}
