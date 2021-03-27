package main.java.andr3a.giacomini.com;

import org.hibernate.Session;

import main.java.andr3a.giacomini.com.beans.pojo.ProjectNameUser;
import main.java.andr3a.giacomini.hibernate.HibernateUtil;

public class TestHibernateConnectionWithMySql {
	
	public static void main( String[] args ) {
		Session session = HibernateUtil.getSessionFactory().openSession();
		
		session.beginTransaction();
		ProjectNameUser projectNameUser = new ProjectNameUser();
		
//		projectNameUser.setId(id);
		projectNameUser.setFirstName( "prova" );
		projectNameUser.setLastName( "inserimento hibernate" );
		projectNameUser.setUserName( "hibernate" );
		projectNameUser.setUserPassword( "hibernate" );		// N.B: Ci pensa MySQL a nascondere la password usando SHA5
//		projectNameUser.setEnabled( true );
//		projectNameUser.setPhone( "" );
		projectNameUser.setEmail( "hibernate@hibernate.com" );
		
		session.save( projectNameUser );
		session.getTransaction().commit();
	}
}