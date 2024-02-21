package com.cleaningServices.Dummy;


public class Dummyfeedback {
		int sid;
		int user_id;
		int rating;
		String comment;
		
		public Dummyfeedback(int sid, int user_id, int rating, String comment) {
			super();
			this.sid = sid;
			this.user_id = user_id;
			this.rating = rating;
			this.comment = comment;
		}

		public int getSid() {
			return sid;
		}

		public void setSid(int sid) {
			this.sid = sid;
		}

		public int getUser_id() {
			return user_id;
		}

		public void setUser_id(int user_id) {
			this.user_id = user_id;
		}

		public int getRating() {
			return rating;
		}

		public void setRating(int rating) {
			this.rating = rating;
		}

		public String getComment() {
			return comment;
		}

		public void setComment(String comment) {
			this.comment = comment;
		}
		
		
	
}
