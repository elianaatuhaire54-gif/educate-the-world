#!/usr/bin/env python3
import json
import sys

def escape_ts(s):
    if s is None:
        return '""'
    return json.dumps(str(s))

def make_lesson(
    id_str,
    age_band,
    stage_name,
    category,
    cat_label,
    title,
    subtitle,
    seq_order,
    prereq,
    day_num,
    icon,
    color,
    badge,
    badge_desc,
    objectives,
    materials,
    dialects,
    key_concept,
    story,
    ask_first,
    listen_for,
    explain_simply,
    parent_tip,
    act_name,
    act_steps,
    quiz_q,
    quiz_opts,
    quiz_idx,
    quiz_exp,
    bite_prompt,
    bite_action,
    sdg_title,
    sdg_goal,
    sdg_steps,
    us_std,
    cam_std,
    dial_phrase="Amagezi ge mugagga"
):
    return {
        "id": id_str,
        "ageBand": age_band,
        "stageName": stage_name,
        "category": category,
        "categoryLabel": cat_label,
        "title": title,
        "subtitle": subtitle,
        "sequenceOrder": seq_order,
        "prerequisiteTopic": prereq,
        "dayOfYear": day_num,
        "estimatedMinutes": 25,
        "parentMinutes": 7,
        "icon": icon,
        "themeColor": color,
        "badgeName": badge,
        "badgeDescription": badge_desc,
        "objectives": objectives,
        "householdMaterials": materials,
        "dialectWords": dialects,
        "mission": {
            "step1_learn": {
                "title": "Interactive Story & Concept",
                "duration": "7 mins",
                "story": story,
                "keyConcept": key_concept,
                "localExample": f"Observed right here in our community: {key_concept.lower()}."
            },
            "step2_discuss": {
                "title": "Parent / Learner Socratic Discussion",
                "duration": "5 mins",
                "askFirst": ask_first,
                "listenFor": listen_for,
                "explainSimply": explain_simply,
                "parentTip": parent_tip
            },
            "step3_activity": {
                "title": "Hands-On Family Mission",
                "duration": "10 mins",
                "gameOrExperimentName": act_name,
                "instructions": act_steps,
                "cleanupPrompt": "Return all materials to their proper places and wash hands."
            },
            "step4_quiz": {
                "title": "Daily Mastery Check",
                "duration": "3 mins",
                "questions": [
                    {
                        "question": quiz_q,
                        "options": quiz_opts,
                        "correctIndex": quiz_idx,
                        "explanation": quiz_exp
                    }
                ]
            }
        },
        "parentTeachingGuide": {
            "introductoryQuestion": ask_first,
            "simplifiedExplanation": explain_simply,
            "safeHomeActivity": {
                "title": act_name,
                "materials": materials,
                "steps": act_steps,
                "safetyTip": "Supervise handling of common household materials."
            },
            "followUpQuestions": [
                {
                    "question": ask_first,
                    "sampleAnswer": listen_for
                }
            ],
            "parentChallenge": f"Apply {title} with your child in an everyday moment today!"
        },
        "fiveMinuteBite": {
            "title": f"5-Min Sprint: {title}",
            "quickPrompt": bite_prompt,
            "quickAction": bite_action
        },
        "whatsAppSnippet": f"📚 *HOME ACADEMY (Day {day_num} • Ages {age_band})*\n*Topic:* {title}\n*Prerequisite:* {prereq}\n*Key Concept:* {key_concept}\n*Badge:* {badge} 🏅",
        "audioNarrationText": f"Welcome to Day {day_num} of our international home academy. Today we explore {title}. {key_concept}. Let us dive into today's mission together.",
        "isFeatured": (day_num % 10 == 0),
        "communityMission": {
            "title": sdg_title,
            "impactGoal": sdg_goal,
            "actionSteps": sdg_steps,
            "worldChangerPrinciple": "Knowledge becomes true power when used to bless family, neighbors, and community.",
            "dialectPhrase": dial_phrase
        },
        "usCurriculumAlignment": {
            "standardCode": us_std,
            "standardsFramework": "US Common Core / NGSS",
            "standardTitle": f"Academic mastery of {title}",
            "gradeLevel": "Grade K-12",
            "benchmarkDescription": f"Demonstrates mastery of {title} with high problem-solving accuracy."
        },
        "cambridgeAlignment": {
            "stage": f"Cambridge Stage (Ages {age_band})",
            "curriculumCode": cam_std,
            "strand": cat_label,
            "learningObjective": f"Understand, analyze and apply {title}",
            "learnerAttributes": ["Confident", "Responsible", "Reflective", "Innovative", "Engaged"]
        }
    }

print("Generator helper defined.")
