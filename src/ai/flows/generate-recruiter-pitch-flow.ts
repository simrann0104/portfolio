'use server';
/**
 * @fileOverview A Genkit flow for generating personalized recruiter pitch messages for Simran Kaur.
 *
 * - generateRecruiterPitch - A function that handles the generation of recruiter pitches.
 * - GenerateRecruiterPitchInput - The input type for the generateRecruiterPitch function.
 * - GenerateRecruiterPitchOutput - The return type for the generateRecruiterPitch function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateRecruiterPitchInputSchema = z.object({
  targetCompany: z.string().optional().describe('Optional: The name of the company the pitch is for, to personalize the message.'),
  simranName: z.string().default('Simran Kaur').describe('The name of the candidate.'),
  specialization: z.string().describe('Simran\'s core specialization and value proposition.'),
  keySkills: z.array(z.string()).describe('A list of key technical skills relevant to ML and Full Stack development.'),
  projects: z.array(z.object({
    title: z.string().describe('The title of the project.'),
    description: z.string().describe('A brief description of the project, highlighting impact and tech used.'),
    techStack: z.array(z.string()).describe('Key technologies used in the project.'),
  })).describe('A list of Simran\'s key projects.'),
  achievements: z.array(z.string()).describe('A list of Simran\'s notable achievements.'),
  educationSummary: z.string().describe('A summary of Simran\'s education history.'),
});
export type GenerateRecruiterPitchInput = z.infer<typeof GenerateRecruiterPitchInputSchema>;

const GenerateRecruiterPitchOutputSchema = z.object({
  pitch: z.string().describe('A personalized introduction message for a potential employer.'),
});
export type GenerateRecruiterPitchOutput = z.infer<typeof GenerateRecruiterPitchOutputSchema>;

export async function generateRecruiterPitch(input: GenerateRecruiterPitchInput): Promise<GenerateRecruiterPitchOutput> {
  return generateRecruiterPitchFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recruiterPitchPrompt',
  input: {schema: GenerateRecruiterPitchInputSchema},
  output: {schema: GenerateRecruiterPitchOutputSchema},
  prompt: `You are Simran Kaur, a Data Science & Full Stack Developer building AI-powered systems, scalable backend architectures, and intelligent digital experiences.
You need to write a concise and compelling introduction message for a potential employer.
Highlight your expertise in Machine Learning and Full Stack development, showcasing your relevant projects and achievements.

Keep the message professional, enthusiastic, and to the point. Aim for about 3-5 sentences.

{{#if targetCompany}}
When writing the pitch, subtly weave in a reference to '{{targetCompany}}' to show personalized interest.
{{/if}}

Here is some information about you:

Name: {{{simranName}}}
Specialization: {{{specialization}}}
Key Skills: {{#each keySkills}}- {{{this}}}
{{/each}}

Projects:
{{#each projects}}
- Project Title: {{{title}}}
  Description: {{{description}}}
  Tech Stack: {{#each techStack}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
{{/each}}

Achievements: {{#each achievements}}- {{{this}}}
{{/each}}

Education: {{{educationSummary}}}

Generate the personalized introduction message.
The message should be suitable for the 'pitch' field in the output JSON.

Output format:
{{json .}}
`,
});

const generateRecruiterPitchFlow = ai.defineFlow(
  {
    name: 'generateRecruiterPitchFlow',
    inputSchema: GenerateRecruiterPitchInputSchema,
    outputSchema: GenerateRecruiterPitchOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
