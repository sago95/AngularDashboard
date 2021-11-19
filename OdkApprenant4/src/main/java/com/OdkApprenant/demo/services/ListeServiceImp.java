package com.OdkApprenant.demo.services;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.OdkApprenant.demo.model.Liste;
import com.OdkApprenant.demo.repositories.ListeRepository;

import static java.time.temporal.TemporalAdjusters.previousOrSame;
import static java.time.temporal.TemporalAdjusters.nextOrSame;

@Service
public class ListeServiceImp implements ListeService {
	
	@Autowired
	private ListeRepository repo;
	
	public List<Liste> listAll(){
		return repo.findAll();
	}
	
	public void save(Liste liste_presence) {
		repo.save(liste_presence);
	}
	
	public List<Liste> findUser(String prenom, String nom) {
		return repo.getUserByPrenomAndNom(prenom, nom);
	}
	
	public List<Liste> findUsers(LocalDate localDate) {
		return this.repo.getListeByDate(localDate);
	}
	
	public List<Liste> findNid(String nid) {
		return this.repo.getUserByNid(nid);
	}
	
	public List<Liste> getPresenceList(int year, int month) {
		LocalDate initial = LocalDate.of(year, month, 1);
		LocalDate start = initial.withDayOfMonth(1);
		LocalDate end = initial.withDayOfMonth(initial.lengthOfMonth());
		return this.repo.getPresenceListByDateGreaterThanEqualAndDateLessThanEqual(start, end);
	}
	
	public List<Liste> getPresenceList(int year, int month, int day) {
        LocalDate week = LocalDate.of(year, month, day);
        LocalDate monday = week.with(previousOrSame(DayOfWeek.MONDAY));
        LocalDate friday = week.with(nextOrSame(DayOfWeek.FRIDAY));
        return this.repo.getPresenceListByDateGreaterThanEqualAndDateLessThanEqual(monday, friday);
    }
	
	public List<Liste> getPresenceList(LocalDate min, LocalDate max) {
        return this.repo.getPresenceListByDateGreaterThanEqualAndDateLessThanEqual(min, max);
    }
}
