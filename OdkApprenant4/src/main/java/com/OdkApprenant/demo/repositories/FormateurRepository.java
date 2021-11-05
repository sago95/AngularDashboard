package com.OdkApprenant.demo.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;

import com.OdkApprenant.demo.model.Formateur;

@Repository
public interface FormateurRepository extends JpaRepository<Formateur, Integer> {
	
	Optional<Formateur> getUserByLoginAndPassword(@PathVariable("login") String login, @PathVariable("password") String password);

}
