export interface ISkill {
  icon: string;
  name: string;
  description: string;
  category:
    | 'frontend'
    | 'backend'
    | 'devops'
    | 'tools'
    | 'softSkills'
    | 'others';
  isDeleted?: boolean;
}
