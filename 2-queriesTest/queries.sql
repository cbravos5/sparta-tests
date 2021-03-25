-- Buscar os nomes de todos os alunos que frequentam alguma turma do professor 'JOAO PEDRO' --
SELECT a.nome FROM aluno a
JOIN aluno_turma at
	ON a.id = at.aluno_id
JOIN turma t
	ON at.turma_id = t.id
JOIN professor p
	ON t.professor_id = p.id
WHERE p.nome = 'JOAO PEDRO';


-- Buscar os dias da semana que tenham aulas da disciplina 'MATEMATICA' --

SELECT dia_da_semana FROM turma t
WHERE disciplina_id IN (SELECT id FROM disciplina
			WHERE nome = 'MATEMATICA' );


-- Buscar todos os alunos que frequentem aulas de 'MATEMATICA' e também 'FISICA' --

SELECT a.* FROM aluno a
JOIN aluno_turma at
	ON a.id = at.aluno_id
JOIN turma t
	ON at.turma_id = t.id
WHERE (t.disciplina_id IN (SELECT id FROM disciplina WHERE nome = 'MATEMATICA'))
      AND (t.disciplina_id IN  (SELECT id FROM disciplina WHERE nome = 'FISICA'));


-- Buscar as disciplinas que não tenham nenhuma turma --

SELECT d.* FROM disciplina d
LEFT JOIN turma t
	ON d.id = turma.disciplina_id
WHERE t.disciplina_id IS NULL


-- Buscar os alunos que frequentem aulas de 'MATEMATICA' exceto os que frequentem 'QUIMICA' -- 

SELECT a.* FROM aluno a
JOIN aluno_turma at
	ON a.id = at.aluno_id
JOIN turma t
	ON at.turma_id = t.id
WHERE (t.disciplina_id IN (SELECT id FROM disciplina WHERE nome = 'MATEMATICA'))
      AND (t.disciplina_id NOT IN  (SELECT id FROM disciplina WHERE nome = 'QUIMICA'));


