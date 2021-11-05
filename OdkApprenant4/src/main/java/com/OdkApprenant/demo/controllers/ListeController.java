package com.OdkApprenant.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.OdkApprenant.demo.model.Liste;
import com.OdkApprenant.demo.services.ListeService;

@CrossOrigin("*")
@RestController
public class ListeController {
	
	@Autowired
	private ListeService ser;
	
	 public ListeController(ListeService listeService) {
	        this.ser = listeService;
	    }
	 
	 @GetMapping("/listes")
		public List<Liste> list() {
			return ser.listAll();
		}
	 
	 @PostMapping("/listes")
		public void add(@RequestBody Liste liste_presence) {
			ser.save(liste_presence);
		}

}
