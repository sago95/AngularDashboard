package com.OdkApprenant.demo.controllers;

import java.util.List;
import java.util.NoSuchElementException;

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
import org.springframework.web.bind.annotation.RestController;

import com.OdkApprenant.demo.model.Apprenant;
import com.OdkApprenant.demo.model.Formateur;
import com.OdkApprenant.demo.services.FormateurService;

@CrossOrigin("*")
@RestController
public class FormateurController {
	
	@Autowired
	private FormateurService service;
	
	 public FormateurController(FormateurService formateurService) {
	        this.service = formateurService;
	    }
	 @GetMapping("/formateurs")
		public List<Formateur> list() {
			return service.listAll();
		}
	 
	 @GetMapping("/formateurs/{id}")
		public ResponseEntity<Formateur> get(@PathVariable Integer id) {
			try {
				Formateur liste_formateurs = service.get(id);
				return new ResponseEntity<Formateur>(liste_formateurs, HttpStatus.OK);
			} catch (NoSuchElementException e) {
				return new ResponseEntity<Formateur>(HttpStatus.NOT_FOUND);
			}
		}
	 @PostMapping("/formateurs")
		public void add(@RequestBody Formateur liste_formateurs) {
			service.save(liste_formateurs);
		}
	 
	 @DeleteMapping("/formateurs")
		public void delete(Integer id) {
			service.delete(id);
		}
	 
	 @PutMapping("/formateur")
		public Formateur updateFormateur(@RequestBody Formateur formateur) {
		 return service.updateFormateur(formateur);
	    }
}
