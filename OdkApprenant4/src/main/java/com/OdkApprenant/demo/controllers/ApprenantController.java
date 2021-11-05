package com.OdkApprenant.demo.controllers;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.OdkApprenant.demo.model.Apprenant;
import com.OdkApprenant.demo.services.ApprenantService;

@CrossOrigin("*")
@RestController
public class ApprenantController {
	
	@Autowired
	private ApprenantService service;
	
	 public ApprenantController(ApprenantService apprenantService) {
	        this.service = apprenantService;
	    }
	 @GetMapping("/apprenants")
		public List<Apprenant> list() {
			return service.listAll();
		}
	 
	 @GetMapping("/apprenants/{id}")
		public ResponseEntity<Apprenant> get(@PathVariable Integer id) {
			try {
				Apprenant liste_apprenants = service.get(id);
				return new ResponseEntity<Apprenant>(liste_apprenants, HttpStatus.OK);
			} catch (NoSuchElementException e) {
				return new ResponseEntity<Apprenant>(HttpStatus.NOT_FOUND);
			}
		}
	 @PostMapping("/apprenants")
		public void add(@RequestBody Apprenant liste_apprenants) {
			service.save(liste_apprenants);
		}
	 
	 @DeleteMapping("/apprenants")
		public void delete(Integer id) {
			service.delete(id);
		}
	 
	 @PutMapping("/apprenants")
		public Apprenant updateApprenant(@RequestBody Apprenant apprenant) {
		 return service.updateApprenant(apprenant);
	    }
	 
	 @GetMapping("/login/{login}&{password}")
	 	public Optional<Apprenant> loginUser(@PathVariable("login") String login, @PathVariable("password") String password){
		 return service.loginUser(login, password);
	 }
}
