package application.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import application.model.Item;

public interface ItemRepository extends JpaRepository<Item, Integer> {

}
