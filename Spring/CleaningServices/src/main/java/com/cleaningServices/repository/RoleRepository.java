package com.cleaningServices.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cleaningServices.entities.Role;

public interface RoleRepository extends JpaRepository<Role, Integer> {

}
