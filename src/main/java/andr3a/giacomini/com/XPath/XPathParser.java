package main.java.andr3a.giacomini.com.XPath;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;

public class XPathParser {

	private File file;
	
	public File getFile() {	return file; }
	public void setFile( File file ) { this.file = file; }
	
	private String methodXPath() {

		try {
			FileInputStream fileInputStream = new FileInputStream( this.getFile() );
		} catch( FileNotFoundException e ) {
			e.printStackTrace();
		}
		
		return null;
	}
}
