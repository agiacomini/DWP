package main.java.andr3a.giacomini.com.beans.pojo;

public class ProjectNameUser {
	
	private int id;
	private String firstName;
	private String lastName;
	private String userName;
	private String userPassword;
	private boolean enabled;
	private String phone;
	private String email;
	
	public int getId() { return id;	}
	public void setId( int id ) { this.id = id; }
	public String getFirstName() { return firstName; }
	public void setFirstName( String firstName ) { this.firstName = firstName; }
	public String getLastName() { return lastName; }
	public void setLastName( String lastName ) { this.lastName = lastName; }
	public String getUserName() { return userName; }
	public void setUserName( String userName ) { this.userName = userName; }
	public String getUserPassword() { return userPassword; }
	public void setUserPassword( String userPassword ) { this.userPassword = userPassword; }
	public boolean isEnabled() { return enabled; }
	public void setEnabled( boolean enabled ) { this.enabled = enabled; }
	public String getPhone() { return phone; }
	public void setPhone( String phone ) { this.phone = phone; }
	public String getEmail() { return email; }
	public void setEmail( String email ) { this.email = email; }
}