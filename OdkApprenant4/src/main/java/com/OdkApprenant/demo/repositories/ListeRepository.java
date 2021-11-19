package com.OdkApprenant.demo.repositories;

import java.time.LocalDate;
import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;

import com.OdkApprenant.demo.model.Liste;

@Repository
public interface ListeRepository extends JpaRepository<Liste, Integer> {
	
	List<Liste> getListeByDate(LocalDate localDate);
	
	List<Liste>getUserByPrenomAndNom(@PathVariable("prenom") String prenom, @PathVariable("nom") String nom);
	
	List<Liste>getUserByNid(@PathVariable("nid") String nid);
	
	List<Liste> getPresenceListByDateGreaterThanEqualAndDateLessThanEqual(LocalDate min, LocalDate max);
}
