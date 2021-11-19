package com.OdkApprenant.demo.services;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;

import com.OdkApprenant.demo.model.Liste;

@Service
public interface ListeService {
	
	List<Liste> listAll();
	void save(Liste liste_presence);
	List<Liste> findUser(String prenom, String nom);
	List<Liste> findUsers(LocalDate localDate);
	List<Liste> findNid(String nid);
	List<Liste> getPresenceList(int year, int month);
	List<Liste> getPresenceList(int year, int month, int day);
	List<Liste> getPresenceList(LocalDate min, LocalDate max);
}
