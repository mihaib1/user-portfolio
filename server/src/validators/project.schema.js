import * as z from 'zod';

const CreateProject = z.object({
    name: z.string(),
    description: z.string(),
    repositoryUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    tags: z.array(z.string()).optional()
});

const EditProject = CreateProject.partial();

export {EditProject, CreateProject}