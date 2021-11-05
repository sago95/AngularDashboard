package com.OdkApprenant.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.OdkApprenant.demo.model.Liste;

@Repository
public interface ListeRepository extends JpaRepository<Liste, Integer> {

}
