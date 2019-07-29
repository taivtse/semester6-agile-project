package com.sol.dght003.data;

import java.util.Random;

public class RandomNumber {
	public static String randomPhoneNumber(int numberLength) {
		String phoneNumber = "09";
		for(int i = 0; i < numberLength-2; i++) {
			phoneNumber += randomNumberSpecificRange(0, 9);
		}
		return phoneNumber;
	}
	
	
	public static int randomNumberSpecificRange(int min, int max) {
		return new Random().nextInt((max - min) + 1) + min;
	}
	
}
