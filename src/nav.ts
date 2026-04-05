import type { LucideIcon } from 'lucide-react'
import {
  Code2,
  FolderOpen,
  GraduationCap,
  Home,
  Languages,
  Mail,
} from 'lucide-react'

export type PageId =
  | 'home'
  | 'languages'
  | 'technologies'
  | 'portfolio'
  | 'education'
  | 'contact'

export type NavItem = {
  id: PageId
  icon: LucideIcon
  label: string
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', icon: Home, label: 'Início' },
  { id: 'languages', icon: Languages, label: 'Idiomas' },
  { id: 'technologies', icon: Code2, label: 'Tech' },
  { id: 'portfolio', icon: FolderOpen, label: 'Portfólio' },
  { id: 'education', icon: GraduationCap, label: 'Formação' },
  { id: 'contact', icon: Mail, label: 'Contato' },
]
