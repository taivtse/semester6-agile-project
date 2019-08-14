package com.sol.dght003.api;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class RedirectAPI {

	@RequestMapping("/test/**")
	public void redirect1(HttpServletRequest request, HttpServletResponse response) throws Exception {
		Cookie cookie = new Cookie("url", request.getRequestURL().toString() + "?" + request.getQueryString());
		response.addCookie(cookie);
		response.sendRedirect("http://fpolymajors.herokuapp.com/");
	}
	
	@RequestMapping("/share/**")
	public void redirect2(HttpServletRequest request, HttpServletResponse response) throws Exception {
		Cookie cookie = new Cookie("url", request.getRequestURL().toString() + "?" + request.getQueryString());
		response.addCookie(cookie);
		response.sendRedirect("http://fpolymajors.herokuapp.com/");
	}
	
	@RequestMapping("/learn/**")
	public void redirect3(HttpServletRequest request, HttpServletResponse response) throws Exception {
		Cookie cookie = new Cookie("url", request.getRequestURL().toString() + "?" + request.getQueryString());
		response.addCookie(cookie);
		response.sendRedirect("http://fpolymajors.herokuapp.com/");
	}
	
	@RequestMapping("/view/**")
	public void redirect4(HttpServletRequest request, HttpServletResponse response) throws Exception {
		Cookie cookie = new Cookie("url", request.getRequestURL().toString() + "?" + request.getQueryString());
		response.addCookie(cookie);
		response.sendRedirect("http://fpolymajors.herokuapp.com/");
	}
	
//	@RequestMapping(value ="/**",produces = "application/json")
//	public void getURLValue(HttpServletRequest request, HttpServletResponse response){
//	    String url = request.getRequestURI();
//	    Cookie cookie = new Cookie("url", url);
//	    response.addCookie(cookie);
//	}
}
