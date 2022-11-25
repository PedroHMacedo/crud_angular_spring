package com.example;

import com.example.model.Course;
import com.example.repository.CourseRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CrudSpringApplication {

  public static void main(String[] args) {
    SpringApplication.run(CrudSpringApplication.class, args);
  }

  @Bean
  CommandLineRunner initDatabase(CourseRepository courseRepository) {
    return args -> {
      courseRepository.deleteAll();

      Course a = new Course();
      a.setName("Angular");
      a.setCategory("front-end");

      Course b = new Course();
      b.setName("Spring");
      b.setCategory("back-end");

      courseRepository.save(a);
      courseRepository.save(b);
    };
  }
}
