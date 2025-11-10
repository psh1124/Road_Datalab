import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import koreanize_matplotlib
import os

# 파일 경로 설정
file_path = './p=1.csv'
data = pd.read_csv(file_path)

scores = data.iloc[:, 2:7].values
categories = ['접근성', '수요성', '통행량', '가용성', '활동성']
num_vars = len(categories)

# 저장할 디렉토리 생성
output_dir = './function/radarchart1/'
os.makedirs(output_dir, exist_ok=True)

# 점수에 대응하는 등급
grades = ['E', 'E+', 'D', 'D+', 'C', 'C+', 'B', 'B+', 'A', 'A+']

for i, row in enumerate(scores):
    if len(row) != num_vars:
        print(f"Skipping row {i} due to unexpected length: {len(row)}")
        continue

    angles = np.linspace(0, 2 * np.pi, num_vars, endpoint=False).tolist()
    
    # 차트 그리기를 위한 데이터 조정
    row = np.concatenate((row, [row[0]]))
    angles += angles[:1]

    fig, ax = plt.subplots(figsize=(6, 6), subplot_kw=dict(polar=True))
    
    ax.fill(angles, row, color='blue', alpha=0.25)
    ax.plot(angles, row, color='blue', linewidth=2)
    
    ax.set_xticks(angles[:-1])
    ax.set_xticklabels(categories, fontsize=16)
    
    plt.ylim(0, 10)  # y축 범위 설정

    # y축 눈금을 등급으로 설정
    plt.yticks(np.arange(1, 11), grades, color="grey", size=9)
    
    ax.set_rlabel_position(30)  # y축 레이블 위치 조정
    

    # 파일 이름 설정 및 차트 저장
    file_name = os.path.join(output_dir, f'레이더차트{i+1}.png')
    plt.savefig(file_name, bbox_inches='tight')
    # plt.show()
    plt.close(fig)
