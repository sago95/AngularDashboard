package com.OdkApprenant.demo.controllers;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
	 @GetMapping("/find/{prenom}&{nom}")
	 	public List<Liste> findUser(@PathVariable("prenom") String prenom, @PathVariable("nom") String nom){
		 return ser.findUser(prenom, nom);
	 }
	 
	 @GetMapping("/find/date={date}")
	 	public List<Liste> findUsers(@PathVariable("date") @DateTimeFormat(pattern="yyyy-MM-dd")  LocalDate date){
		 return this.ser.findUsers(date);
	 }
	 
	 @GetMapping("/find/nid={nid}")
	 	public List<Liste> findNid(@PathVariable("nid") String nid){
		 return this.ser.findNid(nid);
	 }
	 
	 @GetMapping("/find/month={year}-{month}")
	    public List<Liste> getMonthPresenceList(
	            @PathVariable("year") int year,
	            @PathVariable("month") int month)
	    {
	        return this.ser.getPresenceList(year, month);
	    }
	 
	 @GetMapping("/find/week={year}-{month}-{day}")
	    public List<Liste> getListByWeek(
	            @PathVariable("year") int year,
	            @PathVariable("month") int month,
	            @PathVariable("day") int day
	    ){
	        return this.ser.getPresenceList(year, month, day);
	    }
	 
	 @GetMapping("/entre/{start}&{end}")
	    public List<Liste> getPresenceListBetween(
	            @PathVariable("start") @DateTimeFormat(pattern="yyyy-MM-dd") LocalDate start,
	            @PathVariable("end") @DateTimeFormat(pattern="yyyy-MM-dd") LocalDate end){
	        return this.ser.getPresenceList(start, end);
	    }

}
